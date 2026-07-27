import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-uk');
}

export default function WithScreenshotsClientUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-uk" />;
}
