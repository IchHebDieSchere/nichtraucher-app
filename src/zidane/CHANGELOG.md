# Changelog

## [2025-12-23] - Project Restructure for Team Collaboration

### Changed

- **Restructured project into personal workspaces** to prevent merge conflicts with 5 developers
- Simplified entry point: removed `main.jsx`, `App.jsx` now serves as entry point
- Moved all imports from `src/react/` to new structure
- Fixed webpack config to point to correct entry file

### Added

- Personal folder structure: `src/[developer-name]/` for each team member
- `src/shared/` for commonly used components (Button, Card, Input, etc.)
- `src/archive/` for old/experimental code (gitignored)
- `index.js` export pattern for clean imports between team members
- Project structure README with collaboration guidelines

### Removed

- Old `src/react/` folder structure
- `main.jsx` entry file (logic moved to App.jsx)
- Sandbox/demo code (moved to archive)

### Notes

- Each developer now has their own workspace to minimize conflicts
- Teammates can use each other's exports via: `import { Component } from '@/teammate-name'`
- Shared components accessible via: `import { Button } from '@/shared/components'`
- Archive folder is gitignored - safe place for old/trash code

## [2025-12-23] - Android Homescreen Demo & Emergency Widget

### Added

- AndroidHomeScreen demo
- Animated emergency button widget with two modes:
  - Normal mode: Standard red emergency button
  - Glow mode: Pulsing glow effect for emphasis
- Mode toggle feature to switch between normal and glow states

### Notes

- Serves as visual mockup for emergency feature presentation
- Demonstrates widget integration in realistic phone environment

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
