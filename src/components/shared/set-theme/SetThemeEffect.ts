import {settings} from '../../settings'
import {SetThemeEnum} from './SetThemeEnum'

export const SetThemeEffect = {
  setTheme: (darkMode: string) => {
    window.localStorage.setItem(
      `${settings.localStorage.themeKey}`,
      darkMode === SetThemeEnum.dark ? SetThemeEnum.dark : SetThemeEnum.light
    )
  },

  getTheme: function (): any {
    return window.localStorage.getItem(`${settings.localStorage.themeKey}`)
  },

  hasDarkPreferColorScheme: function (): Boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  },

  isDarkTheme: function (theme: string): Boolean {
    return theme === SetThemeEnum.dark
  }
}
