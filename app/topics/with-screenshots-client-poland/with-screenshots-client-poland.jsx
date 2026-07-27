import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-poland');
}

export default function WithScreenshotsClientPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-poland" />;
}
