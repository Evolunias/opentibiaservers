import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-official');
}

export default function WithScreenshotsSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-official" />;
}
