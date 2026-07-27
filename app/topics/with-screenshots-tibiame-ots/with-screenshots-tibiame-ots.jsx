import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-ots');
}

export default function WithScreenshotsTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-ots" />;
}
