import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-open-tibia-server-europe');
}

export default function WithScreenshotsOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-open-tibia-server-europe" />;
}
