import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ruthless-chaos-open-tibia');
}

export default function WithScreenshotsRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ruthless-chaos-open-tibia" />;
}
