import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-ot');
}

export default function WithScreenshotsCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-ot" />;
}
