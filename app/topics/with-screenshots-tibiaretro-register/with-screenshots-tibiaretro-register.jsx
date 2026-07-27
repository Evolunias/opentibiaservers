import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-register');
}

export default function WithScreenshotsTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-register" />;
}
