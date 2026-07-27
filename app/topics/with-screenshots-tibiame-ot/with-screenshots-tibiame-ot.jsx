import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-ot');
}

export default function WithScreenshotsTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-ot" />;
}
