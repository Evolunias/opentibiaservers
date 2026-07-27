import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ot-server-poland');
}

export default function WithScreenshotsOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ot-server-poland" />;
}
