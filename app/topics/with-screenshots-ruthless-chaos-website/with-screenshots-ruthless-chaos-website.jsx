import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ruthless-chaos-website');
}

export default function WithScreenshotsRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ruthless-chaos-website" />;
}
