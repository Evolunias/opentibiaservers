import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-open-tibia-server-germany');
}

export default function WithScreenshotsOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-open-tibia-server-germany" />;
}
