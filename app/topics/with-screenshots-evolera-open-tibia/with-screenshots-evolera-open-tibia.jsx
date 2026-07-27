import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-open-tibia');
}

export default function WithScreenshotsEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-open-tibia" />;
}
