import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-ot');
}

export default function WithScreenshotsSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-ot" />;
}
