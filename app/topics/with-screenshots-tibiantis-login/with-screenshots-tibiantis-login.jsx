import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-login');
}

export default function WithScreenshotsTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-login" />;
}
