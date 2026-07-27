import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-europe');
}

export default function WithScreenshotsServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-europe" />;
}
