# Changelog

## [2025-12-13] - Component Library & Design System

### Added

- 10 reusable components: Button, Input, Card, Header, Text, List, ListItem, Spacer, Divider, ScreenLayout
- ComponentDemo page showcasing all components with examples
- Barrel export (index.js) for clean component imports
- Modern design styling with purple theme and improved typography

### Changed

- Updated all onboarding screens (Splash, Welcome, AskName, Purpose) to use new component library
- Applied consistent styling across all components with proper spacing and rounded corners
- Enhanced color palette and typography for better visual hierarchy

### Technical

- Created simplified component API wrapping Material-UI for team ease of use
- Added PropTypes validation to all components
- Organized component folder structure with barrel exports

### Notes

- Component library enables faster screen development for team members
- Simplified API makes React more accessible for beginners
- All components follow consistent design language

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
