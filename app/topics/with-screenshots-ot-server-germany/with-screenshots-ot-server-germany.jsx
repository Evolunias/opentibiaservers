import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ot-server-germany');
}

export default function WithScreenshotsOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ot-server-germany" />;
}
