<template>
    <button :class="classes" ref="button">
        <z-icon
            class="z-button-icon"
            color="#fff"
            :is-loading="isLoading"
            :name="iconName">
        </z-icon>
        <span v-if="$slots.default" class="z-button-content">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    import ZIcon from '../components/ZIcon'
   
    export default {
        name: "ZButton",
        data() {
            return {
            
            }
        },
        mounted() {   
           this.$refs.button.addEventListener('click',()=>{this.$emit('click')})
        },
        props: {
            iconName: {
                type: String
            },
            iconPosition: {
                type: String,
                validator(iconPosition) {
                    return ['left', 'right'].indexOf(iconPosition) > -1
                }
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'primary',
                validator(type) {
                    return ['primary', 'warning', 'danger', 'info', 
                    'success','primary-transparent','warning-transparent',
                    'danger-transparent',
                    'info-transparent',
                    'success-transparent',
                    ].indexOf(type) > -1
                }
            },
            
        },
        computed: {
            classes() {
                return [
                    'z-button',
                    { [`z-button-icon-${this.iconPosition}`]: true},
                    `z-button-${this.type}`,
                    
                ]
            }
        },
       
       
        components: {
           ZIcon
        }
    }
</script>

<style scoped lang="scss">
  
    .z-button {
        @include hvFlexCenterMx(inline-flex);
        
        padding: $--button-padding;
        
        color: $--button-color;
        border: none;
        outline: none;
        border-radius: $--button-border-radius;
        background: $--button-default-fill;
        font-size: $--button-font-size;
        vertical-align: middle;
        transition: all .3s;
        
        &:active {
            backface-visibility: hidden;
            transform: $--pressed-scale;
        }

        // Icon
        &-icon { height: 1em; width: 1em; order: 1}
        // Content
        &-content { order: 2; margin: 0 4px;}

        // Right position
        &-icon-right {
            > .z-button-content { order: 1; }
            > .z-button-icon { order: 2; }
        }

        // Types
        &-primary { background: $--button-primary-fill; }
        &-primary-transparent {>svg{fill:$--button-primary-fill !important }  background: transparent;border: 1px solid $--button-primary-fill;color:$--button-primary-fill  }
        &-success { background: $--button-success-fill; }
        &-success-transparent { background: transparent;border: 1px solid $--button-success-fill;color:$--button-success-fill;>svg{fill:$--button-success-fill !important }  }
        &-danger { background: $--button-danger-fill; }
        &-danger-transparent { >svg{fill:$--button-danger-fill !important }background: transparent;border: 1px solid $--button-danger-fill;color:$--button-danger-fill  }
        &-warning { background: $--button-warning-fill; }
        &-warning-transparent {>svg{fill:$--button-warning-fill !important } background: transparent;border: 1px solid $--button-warning-fill;color:$--button-warning-fill  }
        &-info { background: $--button-info-fill; }
        &-info-transparent {>svg{fill:$--button-info-fill !important } background: transparent;border: 1px solid $--button-info-fill;color:$--button-info-fill  }
        & + & {
            margin-left: 4px;
        }
        
       
    }
</style>
