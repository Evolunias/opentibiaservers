import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-tibia');
}

export default function WithScreenshotsEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-tibia" />;
}
