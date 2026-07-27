import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-open-tibia');
}

export default function WithScreenshotsLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-open-tibia" />;
}
