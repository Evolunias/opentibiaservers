import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-website');
}

export default function WithScreenshotsTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-website" />;
}
