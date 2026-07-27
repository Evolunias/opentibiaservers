import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ruthless-chaos-server');
}

export default function WithScreenshotsRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ruthless-chaos-server" />;
}
