import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ruthless-chaos-login');
}

export default function WithScreenshotsRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ruthless-chaos-login" />;
}
