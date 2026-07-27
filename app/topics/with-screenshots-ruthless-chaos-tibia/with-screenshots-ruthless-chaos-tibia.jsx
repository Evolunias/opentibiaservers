import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ruthless-chaos-tibia');
}

export default function WithScreenshotsRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ruthless-chaos-tibia" />;
}
