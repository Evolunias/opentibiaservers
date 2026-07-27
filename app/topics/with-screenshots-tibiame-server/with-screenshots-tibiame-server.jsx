import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-server');
}

export default function WithScreenshotsTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-server" />;
}
