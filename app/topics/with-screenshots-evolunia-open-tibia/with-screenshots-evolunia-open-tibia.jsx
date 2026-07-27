import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-open-tibia');
}

export default function WithScreenshotsEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-open-tibia" />;
}
