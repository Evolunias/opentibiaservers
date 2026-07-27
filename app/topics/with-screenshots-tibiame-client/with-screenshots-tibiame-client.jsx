import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-client');
}

export default function WithScreenshotsTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-client" />;
}
