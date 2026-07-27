import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-create-account');
}

export default function WithScreenshotsTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-create-account" />;
}
