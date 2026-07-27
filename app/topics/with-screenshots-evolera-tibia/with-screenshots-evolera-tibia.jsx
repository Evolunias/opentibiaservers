import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-tibia');
}

export default function WithScreenshotsEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-tibia" />;
}
