import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-login');
}

export default function WithScreenshotsTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-login" />;
}
