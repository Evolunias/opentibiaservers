import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-download');
}

export default function WithScreenshotsTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-download" />;
}
