<template>
    <div ref="popover" class="z-popover">
        <!--Content-->
        <transition name="fade">
            <span
                ref="contentWrapper"
                v-if="visible"
                class="z-popover-content-wrapper"
                :class="contentClasses">
                <slot name="content"></slot>
            </span>
        </transition>
        <!--Trigger-->
        <span ref="triggerWrapper" class="z-popover-trigger-wrapper" >
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "ZPopover",
        props: {
            position: {
                type: String,
                default: 'top',
                validator(position) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(position) > -1
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(trigger) {
                    return ['click', 'hover'].indexOf(trigger) > -1
                }
            }
        },
        data() {
            return {
                visible: false
            }
        },
        computed: {
            contentClasses() {
                return [ `z-popover-content-wrapper-${this.position}` ]
            }
        },
        mounted() {
            this.bindTrigger()
        },
        beforeDestroy() {
            this.close()
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onPopoverClick)
            }
            else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
            if(document.querySelector('.z-popover-content-wrapper')){
                
               document.querySelector('.z-popover-content-wrapper').remove()
            }
        },
        methods: {
            bindTrigger() {
                if (this.trigger === 'click') {
                    this.$refs.popover.addEventListener('click', this.onPopoverClick)
                }
                else {
                    this.$refs.popover.addEventListener('mouseenter', this.open)
                    this.$refs.popover.addEventListener('mouseleave', this.close)
                }
            },
            setContentPosition() {
               
                document.body.appendChild(this.$refs.contentWrapper)

               
                const { contentWrapper, triggerWrapper } = this.$refs
                const {top, left, height, width} = triggerWrapper.getBoundingClientRect()
                const {height: contentHeight} = contentWrapper.getBoundingClientRect()
                const positions = {
                    top: {
                        top: top + window.scrollY,
                        left: left + window.scrollX
                    },
                    bottom: {
                        top: top + height + window.scrollY,
                        left: left + window.scrollX
                    },
                    left: {
                        top: top + window.scrollY + (height - contentHeight)/2,
                        left: left + window.scrollX
                    },
                    right: {
                        top: top + window.scrollY + (height - contentHeight)/2,
                        left: left + window.scrollX + width
                    }
                }
                contentWrapper.style.left = positions[this.position].left + 'px'
                contentWrapper.style.top = positions[this.position].top + 'px'
            },
            onDocClick(event) {
                // Click outside of OwPopover, then close it
                if (this.$refs.popover &&
                    (this.$refs.popover === event.target ||
                        this.$refs.popover.contains(event.target))) {
                    return;
                }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === event.target ||
                        this.$refs.contentWrapper.contains(event.target))) {
                    return;
                }
                this.close();
            },
            open() {
                this.visible = true
                this.$emit('open')
                this.$nextTick(() => {
                    // Set content position
                    this.setContentPosition()
                    // Set event handler to listen to document click event
                    document.addEventListener('click', this.onDocClick)
                })
            },
            close() {
                this.visible = false
                this.$emit('close')
                // Remove event listener after closing OwPopover
                document.removeEventListener('click', this.onDocClick)
                
            },
            onPopoverClick(event) {
                // If click the trigger part
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible) {
                        this.close()
                    }
                    else {
                        this.open()
                    }
                }
            },
            removePopover(){

            }
        }
    }
</script>

<style scoped lang="scss">
    .z-popover {
        position: relative;
        display: inline-block;
        vertical-align: top;

        &-content-wrapper {
            position: absolute;
            padding: $--popover-padding;
            border-radius: $--popover-border-raidus;
            background: $--popover-fill;
            filter: drop-shadow(0 1px 4px $--popover-border-color);
            color: $--popover-color;
            max-width: 20em;
            word-break: break-all;
            &::before {
                content: '';
                position: absolute;
                display: block;
                width: 0px;
                height: 0px;
                border: 10px solid transparent;
            }

            /*Position*/
            &-top {
                margin-top: -12px;
                transform: translateY(-100%);
                &::before {
                    top: 100%;
                    border-top-color: $--popover-border-color;
                    border-bottom: none;
                }
            }
            &-bottom {
                margin-top: 12px;
                &::before {
                    bottom: 100%;
                    border-bottom-color: $--popover-border-color;
                    border-top: none;
                }
            }
            &-left {
                transform: translateX(-100%);
                margin-left: -12px;
                &::before {
                    top: 50%;
                    left: 100%;
                    transform: translateY(-50%);
                    border-left-color: $--popover-border-color;
                    border-right: none;
                }
            }
            &-right {
                margin-left: 12px;
                &::before {
                    top: 50%;
                    right: 100%;
                    transform: translateY(-50%);
                    border-right-color: $--popover-border-color;
                    border-left: none;
                }
            }
        }

        &-trigger-wrapper {
            display: inline-block;
        }
    }
</style>