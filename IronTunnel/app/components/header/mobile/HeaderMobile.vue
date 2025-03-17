<script lang='ts' setup>

const [isOpen, open] = useToggle()

const target = ref()

onClickOutside(target, () => isOpen.value = false)

</script>

<template>
    
    <div ref="target" class="lg:hidden">

        <button
            @click="open()"
            :class="[ isOpen ? 'MuiButtonBase-root-1180 MuiButton-root-1153 MuiButton-text-1155 jss1608 jss1609 jss1106 MuiButton-disableElevation-1164' : 'bg-transparent MuiButtonBase-root-89 MuiButton-root-62 MuiButton-text-64 jss479 jss15 MuiButton-disableElevation-73' ]"
            tabindex="0"
            type="button"
            aria-label="open/close"
        >
            <span :class="[ isOpen ? 'MuiButton-label-63' : 'MuiButton-label-1154' ]" class="!w-7">
                <div class="jss1610 jss1611 bg-white"></div>
                <div class="jss1610 jss1612 bg-white"></div>
            </span>
        </button>

        <teleport to="body">
            <CustomMenu :is-open="isOpen" @hide="isOpen = false">

                <div class="mt-8">

                    <ul class="font-samurai flex flex-col space-y-2 w-full">

                       <HeaderItems />

                       <HeaderAdd />

                    </ul>

                </div>

            </CustomMenu>
        </teleport>
        
    </div>

</template>

<style>
.jss15 {
  z-index: 1201;
  margin-right: -20px;
}

.jss479 {
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  align-self: center;
  background: none;
  flex-direction: column;
}

.MuiButton-label-1154 {
  width: 100%;
  display: inherit;
  position: relative;
  align-items: center;
  white-space: nowrap;
  justify-content: inherit;
}

.MuiButton-root-62 {
  height: 44px;
  padding: 0 24px;
  font-size: 14px;
  box-sizing: border-box;
  transition: background-color .25s cubic-bezier(.4,0,.2,1) 0ms,box-shadow .25s cubic-bezier(.4,0,.2,1) 0ms,border .25s cubic-bezier(.4,0,.2,1) 0ms;
  font-family: Gilroy,Arial,sans-serif;
  font-weight: 700;
  line-height: 1;
  border-radius: 12px!important;
  text-transform: none;
}

.MuiButtonBase-root-89 {
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.jss479 span {
  display: flex;
  flex-direction: column;
}

.jss1611 {
  margin-bottom: 6px;
}

.jss1610 {
  width: 100%;
  height: 2px;
  transition: .2s background;
  transform-origin: center;
  transition-duration: .25s;
  transition-property: transform;
  transition-timing-function: linear;
}

.MuiButton-label-63 {
  width: 100%;
  display: inherit;
  position: relative;
  align-items: center;
  white-space: nowrap;
  justify-content: inherit;
}

.jss1609 .jss1611 {
  transform: translateY(4px) rotate(45deg);
}

.jss1609 .jss1612 {
  transform: translateY(-5px) rotate(-45deg);
}
</style>