import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-login');
}

export default function WithScreenshotsTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-login" />;
}
