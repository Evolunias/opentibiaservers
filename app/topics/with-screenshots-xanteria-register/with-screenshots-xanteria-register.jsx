import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-register');
}

export default function WithScreenshotsXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-register" />;
}
