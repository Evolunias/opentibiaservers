import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-login');
}

export default function WithScreenshotsTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-login" />;
}
