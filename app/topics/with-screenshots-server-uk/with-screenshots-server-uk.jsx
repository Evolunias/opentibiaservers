import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-uk');
}

export default function WithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-uk" />;
}
