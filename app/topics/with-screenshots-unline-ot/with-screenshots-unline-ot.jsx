import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-ot');
}

export default function WithScreenshotsUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-ot" />;
}
