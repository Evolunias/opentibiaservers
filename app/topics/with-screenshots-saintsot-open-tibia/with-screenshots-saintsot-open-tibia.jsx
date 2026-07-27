import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-open-tibia');
}

export default function WithScreenshotsSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-open-tibia" />;
}
