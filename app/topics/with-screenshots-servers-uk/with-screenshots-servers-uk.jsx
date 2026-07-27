import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-uk');
}

export default function WithScreenshotsServersUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-uk" />;
}
