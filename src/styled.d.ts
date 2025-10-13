import 'styled-components';
import type { AppTheme } from './theme';

declare module 'styled-components' {
  // Make theme strongly typed in styled-components
  // so theme.* can be used without TS errors.
  export interface DefaultTheme extends AppTheme {}
}
