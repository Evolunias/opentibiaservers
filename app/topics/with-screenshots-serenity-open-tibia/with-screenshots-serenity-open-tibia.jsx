import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-open-tibia');
}

export default function WithScreenshotsSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-open-tibia" />;
}
