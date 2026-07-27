import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-germany');
}

export default function WithScreenshotsClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-germany" />;
}
