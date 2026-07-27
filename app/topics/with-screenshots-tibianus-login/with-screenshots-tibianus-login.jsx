import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-login');
}

export default function WithScreenshotsTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-login" />;
}
