import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-ot');
}

export default function WithScreenshotsEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-ot" />;
}
