<template>
    <svg
        v-if="name"    
        :class="classes"
        :style="styles">
        <symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M512 1012.59946667a500.59946667 500.59946667 0 1 0-475.5456-343.72266667A45.53386667 45.53386667 0 1 0 122.88 640.34133333 409.6 409.6 0 1 1 512 921.6a45.53386667 45.53386667 0 1 0 0 90.99946667z"  ></path></symbol>
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>

    export default {
        name: "ZIcon",

        props: {
            name: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: '#C9D4E3'
            },
            isLoading: {
                type: Boolean,
                default: true
            },
            size: {
                type: String,
                default: '1em'
            }
        },
        computed: {
            styles() {
                return {
                    fill: this.color,
                    width: this.size,
                    height: this.size
                }
            },
            classes() {
                return [
                    'z-icon',
                    {'z-icon_loading': this.isLoading}
                ]
            }
        }
    }
</script>

 <style scoped lang="scss">
    .z-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        &_loading {
            animation: spin .5s infinite linear;
        }
    }
</style>