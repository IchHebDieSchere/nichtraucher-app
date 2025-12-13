# Changelog

## [2025-12-13] - Onboarding Flow (Work in Progress)

### Added

- Onboarding screens: Splash, Welcome, AskName, Purpose
- `ScreenLayout.jsx` - Reusable wrapper component extracted from AppLayout for easier screen development
- `App.jsx` (new) - Manages onboarding flow and state

### Changed

- Renamed `App.jsx` → `main.jsx` (entry point)
- Updated webpack config entry point accordingly
- AppLayout now renders after onboarding sequence

### Notes

- Work in progress - UI styling not finalized
- ScreenLayout provides team with consistent mobile container for future screens
- Simplifies creating new screens with uniform appearance
