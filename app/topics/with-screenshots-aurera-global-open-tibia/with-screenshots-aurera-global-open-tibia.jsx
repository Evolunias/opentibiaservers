import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-open-tibia');
}

export default function WithScreenshotsAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-open-tibia" />;
}
