import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-tibia');
}

export default function WithScreenshotsKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-tibia" />;
}
