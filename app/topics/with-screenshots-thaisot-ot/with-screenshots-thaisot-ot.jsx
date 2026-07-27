import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-ot');
}

export default function WithScreenshotsThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-ot" />;
}
