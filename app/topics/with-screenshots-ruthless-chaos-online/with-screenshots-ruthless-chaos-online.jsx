import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ruthless-chaos-online');
}

export default function WithScreenshotsRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ruthless-chaos-online" />;
}
